# CRUD : Create Read Update Delete

## CRUD API in REST Convention:

lets create  a basic blog app API 
    1. to create a blog
 
        URL :  /blogs (Resources should be plural)
        Method: POST
        body params -> {
                title: " ",
                desc: " ",
        }

    2. to read all blogs

        URL : /blogs
        Method: GET

    3. API to read specific blog(using blog id)

        URL : /blogs/:id (: means variable value) ex: /blogs/234
        Method: GET

    4. to delete a blog
        URL : /blogs/:id
        Method: DELETE
    
    5. to update a blog:
        URL : /blogs/:id
        Method: PUT / PATCH
        body parsers : {
            title:"",
            desc: "",
        }