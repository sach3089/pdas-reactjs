function ProfileCard(props){

    // const title = props.title;
    // const handle = props.handle;

    //const {title,handle} = props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                   <img src={props.image} alt="pda logo" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                   <p className="title is-4">Title is {props.title}</p>
                   <p className="subtitle is-6">Handle is {props.handle}</p>
                </div>
                <div className="content">
                    {props.description}
                </div>
            </div>
            
        </div>
    );
}
export default ProfileCard;