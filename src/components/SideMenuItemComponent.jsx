import '@/styles/SideMenuItemComponent.css'

export default function SideMenusComponent({title,url,hint="no hint",children})
{
    return (
        <div className="side-menu__item">
            <a href={url} title={hint}>
                {
                    children == null
                    ? (title)
                    : (children)
                }
            </a>
        </div>
    );

}