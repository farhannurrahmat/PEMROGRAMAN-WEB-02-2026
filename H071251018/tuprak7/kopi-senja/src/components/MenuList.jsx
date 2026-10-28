import MenuCard from "./MenuCard";

function MenuList ({daftarMenu, onTambah}) {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {daftarMenu.map((menu) => (
                <MenuCard key={menu.id} menu={menu} onTambah={onTambah} />
            ))}
        </div>
    )
};

export default MenuList