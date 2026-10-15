export default class RecommendationService {

    suggest(books){

        const pendingBooks = books.filter(
            book => book.status === "NAO_LIDO"
        );

        if(pendingBooks.length === 0){

            return {
                source:"FALLBACK",
                message:"Nenhum livro pendente"
            };
        }

        return {
            source:"IA",
            recommendation:
                pendingBooks[0].title
        };
    }
}