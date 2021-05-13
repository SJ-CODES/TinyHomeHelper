export default (posts = [], action) => { 
    // state is replaced with posts as the state takes place within the posts reducer
    // cases return action.payload which is the post retrieved from api in the actions
    switch (action.type) {
        case 'FETCH-ALL':
            return action.payload 
        case 'CREATE':
            return posts 
    }
}