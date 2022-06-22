
export default function guest(store: any, redirect: any){
    if(store.state.loggedIn){
        return redirect('/dashboard')
    }
}