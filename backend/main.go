package main

import (
	"github.com/B6428549/payment/controller"
	"github.com/B6428549/payment/entity"
	"github.com/gin-gonic/gin"
)

func main() {
	entity.SetupDatabase() //เชื่อมข้อมูล sqlite ผ่าน gorm
	r := gin.Default()  //สร้าง object r และใช้เป็น server  api route
	r.ForwardedByClientIP = true
	r.SetTrustedProxies([]string{"127.0.0.1"})  //กำหนด api
	r.Use(CORSMiddleware())

	// Member Routes
	r.POST("/members", controller.CreateMember)
	r.GET("/members", controller.ListMembers)
	r.GET("/member/:username", controller.LoginMemberByUsername)
	r.PATCH("/members", controller.UpdateMember)
	r.DELETE("/members/:username", controller.DeleteMember)
	r.GET("/members/:username", controller.GetMemberByUsername)

	// Occupation Routes
	r.GET("/occupations", controller.ListOccupations)
	// Gender Routes
	r.GET("/genders", controller.ListGenders)

	// Dentist Routes
	r.GET("/dentist/:username", controller.LoginDentistByUsername)
	r.GET("/dentists", controller.ListDentist)
	r.DELETE("/dentists/:username", controller.DeleteDentist)
	r.POST("/dentists", controller.CreateDentist)
	r.PATCH("/dentists", controller.UpdateDentist)

	// Admin Routes
	r.GET("/admin/:username", controller.LoginAdminByUsername)

	// Payment Routes
	r.GET("/payments", controller.ListPayments)
	r.POST("/payments", controller.CreatePayment)
	r.GET("/payments/:id", controller.GetPayment)
	r.DELETE("/payments/:id", controller.DeletePayment)
	// Service Routes
	r.GET("/services", controller.ListServices)
	//History Routes
	r.GET("/histories", controller.ListHistories)
	r.GET("/historiesbyusername", controller.ListHistoriesByUserID)
	r.GET("/history/byuserName/:username", controller.GetHistoryByUsername)
	r.GET("/history/:id", controller.GetHistory)
	r.POST("/histories", controller.CreateHistory)
	r.PATCH("/histories", controller.UpdateHistory)
	r.DELETE("/histories/:id", controller.DeleteHistory)

	//Appointment Routes
	r.GET("/appointments", controller.ListAppointment)
	r.POST("/appointments", controller.CreateAppointment)

	// Run the server
	r.Run(":8080")

}

func CORSMiddleware() gin.HandlerFunc {  //การตั้งค่าส่วนหัว ให้เรียกใช้แหล่งข้อมูล ผ่าน fetch api
	return func(c *gin.Context) {	   //รับส่งค่าจาก HTTP request or response
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}


