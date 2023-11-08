export async function load({ fetch }){  

    const candidates = (await fetch('/api/candidates')).json();

    return {
        candidates : candidates
    }
}