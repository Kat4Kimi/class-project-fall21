Grocery List
User 
  Profile 
lists 
  title
  desc

  create_at

items
  name
  desc

notes 
  body

User has many lists
list has many items, list belongs to a user 
items has many notes, item belongs to a list 
notes belongs to a item


dr 
patient

appointment
rails g model apppointment ... ... dr:belongs_to patient:belongs_to

dr model
dr has many app
dr hasmany patient thr app

patient model
patient has many app 
patient has many dr thr app 

appointment model
app belongs to dr
app belongs to patient