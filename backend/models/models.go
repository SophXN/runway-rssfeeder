package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Review struct {
	ID       primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Reviewer string             `json:"_id,omitempty" bson:"_id,omitempty"`
	Date     string             `json:"_id,omitempty" bson:"_id,omitempty"`
	Rating   int32              `json:"_id,omitempty" bson:"_id,omitempty"`
	Comment  string             `json:"_id,omitempty" bson:"_id,omitempty"`
}
