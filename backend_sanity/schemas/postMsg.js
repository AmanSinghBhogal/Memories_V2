export default{
    name: 'postMsg',
    title: 'postMsg',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'message',
            title: 'Message',
            type: 'string'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'creator',
            title: 'Creator',
            type: 'string'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: "array",
            of: [
                {
                    name: "tag",
                    title: "Tag",
                    type: "string"
                }
            ]
        },
        {
            name: 'selectedFile',
            title: 'SelectedFile',
            type: 'image'
        },
        {
            name: 'likes',
            title: 'Likes',
            type: "array",
            of: [
                {
                    name: "likedBy",
                    title: "LikedBy",
                    type: "string"
                }
            ],
            initialValue: []
        },
        {
            name: 'createdAt',
            title: 'CreatedAt',
            type: 'datetime',
            initialValue: () => ({
                releaseDate: (new Date()).toISOString()
              })
        },
    ]
}