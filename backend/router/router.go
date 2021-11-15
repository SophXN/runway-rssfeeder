package router

import (
	"github.com/gorilla/mux"
	"github.com/sophxn/runway-rssfeeder/backend/middleware"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()
	router.HandleFunc("/xml", middleware.GetXML).Methods("GET", "OPTIONS")

	return router
}
