// tags.jsx
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import { tagsList } from "./tagList";

const Tags = () => {
  console.log("taglist" , tagsList);
  
  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 px-6 py-4">
        <h1 className="mt-12 text-2xl font-normal">Tags</h1>
        <p className="text-sm text-gray-700">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="text-sm text-gray-700 mb-6">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {
            tagsList.map((tag) => (
              <TagsList tag={tag} key={tag.id} />
            ))
            
         }
        </div>
      </div>
    </div>
  );
};

export default Tags;