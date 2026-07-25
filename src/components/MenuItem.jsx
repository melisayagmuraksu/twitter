function MenuItem({ item }) {
  return (
    <div className="flex gap-4">
      <i className={item.icon}></i>
      <span>{item.title}</span>
    </div>
  );
}

export default MenuItem;
