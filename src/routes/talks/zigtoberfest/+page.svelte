<svelte:head>
	<title>Constrained Zig</title>
	<meta name='description' content='Website for my Zigtoberfest talk from 2024'>
</svelte:head>

<style>
	.links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
	}
</style>

<h1>Constrained Zig</h1>
<h2>Zigtoberfest 2024</h2>

<p>
	For the <a href='https://zigtoberfest.de' target='_blank'>Zigtoberfest</a> 2024 I
	gave a talk about interesting properties of constraint programs. This page provides
	a small summary of the talk. Also, here are the links to the slides and the code I
	wrote for the talk.
</p>
<div class='links'>
	<a data-umami-event='Zigtoberfest Slides' href='/zigchr.pdf' target='_blank'>Slides</a>
	<a data-umami-event='ZigCHR' href='https://github.com/LukasPietzschmann/zigchr' target='_blank'>Repo</a>
</div>
<h3>Intro</h3>
<p>
	CHR (Constraint Handling Rules) is a rule-based language and formalism that is
	typically used through an embedding into a host language. This makes it interesting
	to see how CHR's declarative nature can be used in languages with a possibly
	completely different paradigm. Besides that, it also brings cool properties that CHR
	programs can have to said other languages. Those properties will be what we are looking
	closer at in this little write-up.
</p>
<p>
	To start off, let's look at a simple example of a CHR program:
</p>
<pre><code>min(N) \ min(M) &lt;=&gt; N &lt;= M | true.</code></pre>
<p>
	This example will compute the minimum of an arbitrary number of values. We can read
	it like this: If there are two candidates for the minimum, <code>min(N)</code> and
	<code>min(M)</code>, then the minimum is the smaller one of the two and the bigger
	one will be removed from the list of candidates. What's cool about this notation is
	that we did not write down the steps of how to compute the minimum, but rather we
	described how the minimum looks like and the computer will find a fitting solution
	on its own.
</p>

<h3>Properties</h3>
<h4>Anytime Algorithms</h4>
<p>
	We start with a simple property that every CHR algorithm has: It is an anytime
	algorithm. This means that the algorithm can be stopped at any point in time and the
	state at this time will be a valid approximation of the final result.
</p>
<p>
	This property is especially useful if we need to guarantee a certain response time
	for our algorithm. Let's say it has to produce a result in under 100ms. Due to it
	being anytime, we can just stop the computation after 100ms, observe the current
	state, and return it as an approximation.
</p>

<h4>Memoization</h4>
<p>
	Every computer scientist has probably written the fibonacci function at least once in
	their life. In CHR we can formulate it as follows:
</p>
<pre><code>fib(0, R) &lt;=&gt; R = 1 | true.
fib(1, R) &lt;=&gt; R = 1 | true.
fib(N, R) &lt;=&gt; N &gt; 1 |
        N1 = N - 1, N2 = N - 2,
        fib(N1, R1), fib(N2, R2),
        R = R1 + R2.</code></pre>
<p>
	While this works totally fine, it's also painfully slow &mdash; especially for bigger
	values of <code>N</code>. The reason for this is that we are computing the same values
	over and over again. If we could just remember and reuse the intermediate results, we
	could speed this up to linear time complexity.
</p>
<p>
	Achieving this is criminally easy in CHR. We just need to change our simplification
	rules to propagations and add a little cleanup rule:
</p>
<pre><code>fib(N,M1) \ fib(N,M2) &lt;=&gt; M1=M2.

fib(0, R) ==&gt; R = 1 | true.
fib(1, R) ==&gt; R = 1 | true.
fib(N, R) ==&gt; N &gt; 1 |
        N1 = N - 1,  N2 = N - 2,
        fib(N1, R1), fib(N2, R2),
        R = R1 + R2.</code></pre>

<h4>Confluence</h4>
<p>
	The next property we will look at is confluence. Not every CHR program is
	necessarily confluent, but it's a very desirable property to have, since it will
	give us other handy properties for free. A program is confluent if it will always
	produce the same result for a given input, regardless of the order in which the
	rules are applied or in which order the query is given. Therefore, the relation of
	the initial and final state is a function.
</p>

<h4>Incremenrality</h4>
<p>
	Given that our algorithm is confluent, its also incremental or online. But what does
	that mean? In an online algorithm, we can add new constraints to the system at any
	time and they will eventually participate in the computation. This is very powerful,
	especially in e.g. feedback loops where we need to react to new input constantly.
</p>

<h4>Declarative Concurrency</h4>
<p>
	Writing correct concurrent programs is typically hard. But with a confluent CHR
	program not so much. Actually, we don't have to do anything at all. We can just take
	a hand full of constraints and put it on one machine, and put the other ones on
	another machine, evaluate both sets in parallel, bring them back together and we
	will have a correct result that equals the one we would have gotten if we would have
	evaluated everything on one machine.
</p>
<p>
	If you wanna try it out, here's a simple implementation of the map-reduce pattern.
</p>
<pre><code>map(OP) \ v(X) &lt;=&gt;
    C =.. [OP, X, R],
    call(C),
    r(R)

reduce(OP) \ r(X), r(Y) &lt;=&gt;
    C =.. [OP, X, Y, R],
    call(C),
    r(R)</code></pre>