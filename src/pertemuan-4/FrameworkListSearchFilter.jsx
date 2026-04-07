import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworklistSearchFilter() {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedTag, setSelectedTag] = useState("");

    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    /Inisialisasi Handle perubahan nilai input form/
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();

    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name
                .toLowerCase()
                .includes(_searchTerm) ||
            framework.description
                .toLowerCase()
                .includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;


    });
    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];


    return (
        <div className="p-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Framework List</h1>
                <p className="text-gray-600">Search and filter frameworks</p>
            </div>

            {/* Search & Filter */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
                {/* Search Input */}
                <input
                    name="searchTerm"
                    onChange={handleChange}
                    type="text"
                    placeholder="Search frameworks..."
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Filter Dropdown */}
                <select
                    name="selectedTag"
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    <option value="">All Tags</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
                <p className="text-lg font-semibold text-gray-700">
                    {filteredFrameworks.length} frameworks found
                </p>
            </div>

            {/* Frameworks List */}
            <div className="space-y-6">
                {filteredFrameworks.map((item) => (
                    <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600 mt-1">{item.description}</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {item.details.releaseYear}
                            </span>
                        </div>

                        {/* Developer & Website */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <div className="flex items-center">
                                <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                                    👨‍💻
                                </span>
                                <div>
                                    <p className="font-semibold text-gray-900">{item.details.developer}</p>
                                </div>
                            </div>
                            <a
                                href={item.details.officialWebsite}
                                target="_blank"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                Visit Site
                            </a>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredFrameworks.length === 0 && (
                <div className="text-center py-20">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">🔍</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">No frameworks found</h3>
                    <p className="text-gray-600">Try different search or filter</p>
                </div>
            )}
        </div>
    );
}