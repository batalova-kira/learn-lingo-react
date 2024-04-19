import {
    ReviewAvatar,
    ReviewComment,
    ReviewName,
    ReviewRating,
    WrapperAvatar,
    WrapperReviewRating,
} from "./ReviewItem.styled";
import IconStar from "../../assets/icons/start.svg";

export const ReviewItem = ({ review }) => {
    const { reviewer_name, reviewer_rating, comment } = review;
    // const { levels } = item;
    return (
        <>
            <div>
                <WrapperAvatar>
                    <ReviewAvatar />
                    <div>
                        <ReviewName>{reviewer_name}</ReviewName>
                        <WrapperReviewRating>
                            <img src={IconStar} alt="star rating" />
                            <ReviewRating>
                                {reviewer_rating.toFixed(1)}
                            </ReviewRating>
                        </WrapperReviewRating>
                    </div>
                </WrapperAvatar>
                <ReviewComment>{comment}</ReviewComment>
            </div>
        </>
    );
};
