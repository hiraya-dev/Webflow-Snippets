$(document).ready(function() {
    // Initialize the FAQ schema object
    var schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": []
    };

    // Loop through each FAQ item using attributes
    $(".cp-faq_item").each(function() {
        // Get the question and answer from data-schema-question and data-schema-answer attributes
        let question = $(this).find("[data-schema-question]").text();  // Using text content instead of attribute
        let answer = $(this).find("[data-schema-answer]").text();      // Using text content instead of attribute

        // Create a question and answer object for the FAQ schema
        let faqItem = {
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer
            }
        };

        // Add the FAQ item to the schema
        schema.mainEntity.push(faqItem);
    });

    // Convert the schema object to a JSON string
    var schemaJson = JSON.stringify(schema);

    // Create a script element for structured data
    var scriptElement = $('<script>', {
        type: 'application/ld+json',
        text: schemaJson
    });

    // Append the script element to the head
    $('head').append(scriptElement);
});
