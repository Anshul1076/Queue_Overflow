// taglist.jsx
const TagsList = ({ tag }) => {
  console.log("tag" , tag);
  
  return (
    <div className="p-3 border border-gray-300 rounded-md">
      <h5 className="inline-block my-2 px-2 py-1 bg-blue-100 text-blue-700 rounded">
        {tag.tagName}
      </h5>
      <p className="text-sm text-gray-800 leading-5">{tag.tagDesc}</p>
    </div>
  );
};

export default TagsList;