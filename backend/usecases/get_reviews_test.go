package usecases

import (
	"fmt"
	"testing"

	"github.com/sophxn/runway-rssfeeder/backend/entities"
	// "github.com/sophxn/runway-rssfeeder/backend/usecases"
)

type MockReviewRepo struct{}

func (MockReviewRepo) GetAllReviews() ([]entities.Review, error) {
	return nil, fmt.Errorf("something went wrong")
}
func TestGetReviews(t *testing.T) {
	// repo := new(MockReviewRepo)

	// todos, err := usecases.GetReviews(repo)

	// if err != usecases.ErrInternal {
	// 	t.Fatalf("expected ErrInternal; Got: %v", err)
	// }

	// if todos != nil {
	// 	t.Fatalf("expected todos to be nil; Got: %v", todos)
	// }
}
