package ui_test

import (
	"fmt"
	"net/http"
	"testing"

	"github.com/sophxn/runway-rssfeeder/backend/entities"
	"github.com/sophxn/runway-rssfeeder/backend/ui"
)

type MockService struct {
	err     error
	reviews []entities.Review
}

func (s MockService) GetAllReviews() ([]entities.Review, error) {
	if s.err != nil {
		return nil, s.err
	}
	return s.reviews, nil
}

func TestHTTP(t *testing.T, test HTTPTest) {
	service := &MockService{
		err: fmt.Errorf("something bad happened"),

		w := httptest.NewRecorder()
		r := httptest.NewRequest(http.MethodGet, "http://mytest.com/", nil)

		server := ui.NewHTTP()

		server.UseService(service)

		server.ServeHTTP(w, r)
	}
}