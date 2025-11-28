export function merge(
    collection1: number[],
    collection2: number[],
    collection3: number[]
): number[] {
    let asc2: number[] = [];
    for (let i = collection2.length - 1; i >= 0; i--) {
        asc2.push(collection2[i]);
    }

    function merge2(a: number[], b: number[]): number[] {
        let i = 0;
        let j = 0;
        const result: number[] = [];

        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                result.push(a[i]);
                i++;
            } else {
                result.push(b[j]);
                j++;
            }
        }

        while (i < a.length) result.push(a[i++]);
        while (j < b.length) result.push(b[j++]); // <-- FIXED

        return result;
    }

    const merge12 = merge2(collection1, asc2);
    return merge2(merge12, collection3);
}

console.log(
    merge([1, 3, 5], [9,7,4], [2,6,8,10])
);
