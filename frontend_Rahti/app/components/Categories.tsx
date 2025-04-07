const Categories = ({ theme = "light" }: { theme: "light" | "dark" }) => {
    const themes = {
        light: "border-white opacity-60 hover:border-gray-200 hover:opacity-100",
        dark: "border-gray-700 opacity-80 hover:opacity-100",
    };

    const categories = [
        { name: "Riads", img: "/categories/riad.jpg" },
        { name: "Amazing views", img: "/categories/amazingviews.jpg" },
        { name: "Countryside", img: "/categories/countryside.jpg" },
        { name: "Lakefront", img: "/categories/lakefront.jpg" },
        { name: "Amazing pools", img: "/categories/amazingpool.jpg" },
    ];

    return (
        <div className="pt-3 cursor-pointer pb-6 flex justify-center items-center space-x-8">
            {categories.map((category, index) => (
                <div key={index} className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${themes[theme]}`}>
                    <img
                        className="w-6 h-6 rounded-full"
                        src={category.img}
                        alt={category.name}
                        width="24"
                        height="24"
                    />
                    <span className="text-sm font-medium">{category.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Categories;
