function SocialLink({ href, icon, parentClass }) {
  return (
    <li>
      <a href={href} target="_blank" className={parentClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
}
export default SocialLink;
