import useSWR from 'swr';

export function useObservableDocument(document: string) {
    return useSWR(
        ['observable', document], 
        async () => require(`../../assets/${document}.json`),
        {
            suspense: false,
            revalidateOnFocus: false,
        },
    );
}
