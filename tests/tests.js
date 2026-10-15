function testRecommendation(){

    const books = [

        {
            title:"Clean Code",
            status:"NAO_LIDO"
        }
    ];

    const recommendation =
        books[0];

    console.assert(
        recommendation.title ===
        "Clean Code"
    );

    console.log(
        "Teste passou!"
    );
}

testRecommendation();