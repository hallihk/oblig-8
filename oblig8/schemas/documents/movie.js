export default {
    type: "document",
    name: "movie",
    title: "Movie",
    fields: [
        {        
            type: "string",
            name: "title",
            title: "Title",
        },
        {
            type: "reference",
            name: "actor",
            title: "Actor",
            to: [{type: 'actor'}]
        }
    ]
}