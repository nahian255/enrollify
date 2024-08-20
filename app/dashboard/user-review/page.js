import AddReview from "@/components/addReview/AddReview";

const userReview = () => {
    return    (
        <div>
           <h1 className="text-4xl font-serif font-semibold text-center">
            Add <span className="text-purple-500">User Review</span>
          </h1>
          <div className="p-10">
          <AddReview></AddReview>
          </div>
        </div>
    )
}
export default userReview;