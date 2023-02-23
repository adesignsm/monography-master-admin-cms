export default {
    name: "strip_templates",
    title: "Strip Templates", // name of the model
    type: "document",
    description: "Please upload up to three strip templates",
    fields: [
        {
            name: "strip_title",
            type: "string",
            title: "Strip Template Batch Title"
        },
        {
            name: "strip_template_uploads",
            type: "array",
            title: "Strip Template Uploads",
            of: [
                {
                    name: "strip_upload",
                    type: "image",
                    title: "Strip Template"
                }
            ]
        }
    ]
}