import classes from './Contacts__contactList_nameplate_image.module.css'


const Contacts__contactList_nameplate_image = (props) => {
    return <div className={classes.item}>
        <img src={props.user_img} alt=""/>
    </div>
}


export default Contacts__contactList_nameplate_image;