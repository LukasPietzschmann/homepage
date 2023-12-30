/* eslint-disable  @typescript-eslint/no-explicit-any */
export async function fetchAndReturnJson(url: string) {
    try {
        const response = await fetch(url);
        switch (response.status) {
            case 403:
            case 429:
                return Promise.reject('Rate limit exceeded')
        }
        return response.json();
    } catch (err: any) {
        return Promise.reject(err.message ?? 'Unknown error');
    }
}
