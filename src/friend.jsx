export default function Friend(friend){
    // console.log(friend.friend.name);
    return(
        <div className="box">
            <h4>Name:{friend.friend.name}</h4>
            <p>Email: {friend.friend.email}</p>
        </div>
    )
}