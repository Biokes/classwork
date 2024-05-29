import Home from '@babel/core'
export const  ROUTES = [
    {
        path: "",
        element : <Layout/>
        children: [
            {
                path: "",
                element: <Home/>
            }
        ]
    }
]