import React, { useState } from 'react';
import * as S from './style';
import * as T from '@/styles/common/table.style';
import { StateButton } from '@/styles/common/StateButton';
import ConfirmBest from '../../ConfirmBest';
import { ReviewData } from '@/types/api/review';
import ConfirmDelete from '../../ConfirmDelete';

interface ReviewItemProps {
  review: ReviewData
}

const ReviewItem = ({review}: ReviewItemProps) => {
  const [isBestModalOpen, setIsBestModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <S.Row>
        <T.Td>{review.reviewId}</T.Td>
        <T.Td>{review.name}</T.Td>
        <T.Td>{review.address}</T.Td>
        <S.ReviewContent>
          {review.title}
        </S.ReviewContent>
        <T.Td>{review.createdAt}</T.Td>
        <T.Td>
          <StateButton state={review.best ? 'green' :'blue'} onClick={() => setIsBestModalOpen(true)}>
            {review.best ? '베스트 리뷰': '일반 리뷰'}
          </StateButton>
        </T.Td>
        <T.Td>
          <StateButton state={'red'} onClick={() => setIsDeleteModalOpen(true)}>삭제</StateButton>
        </T.Td>
      </S.Row>
      {isBestModalOpen && <ConfirmBest reviewId={review.reviewId} setIsOpen={setIsBestModalOpen} />}
      {isDeleteModalOpen && <ConfirmDelete reviewId={review.reviewId} setIsOpen={setIsDeleteModalOpen} />}
    </>
  );
};

export default ReviewItem;
