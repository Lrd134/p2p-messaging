# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


first = User.create(username: "asshole", password:"1322")
penny = User.create(username: "PennyPanda", password:"pandasROCK3!")
hannah = User.create(username: "HappyHannah", password: "pandas3312$")
peter = User.create(username: "PeterPiccolo", password: "!piccALot389@")

Message.create(text: "Hello! How are you today?", user: hannah, username: penny.username)
Message.create(text: "I'm well, and you?", user: penny, username: hannah.username)
Message.create(text: "What's happs", user: peter, username: penny.username)
Message.create(text: "Nothing much, what's up with you?", user: penny, username: peter.username)
Message.create(text: "I just saw a paper on Science Fiction!", user: penny, username: hannah.username)
Message.create(text: "That's so cool! I love Sci-Fi!", user: hannah, username: penny.username)
Message.create(text: "I'm doing great! I just finished my essay on Floral Ambiguities", user: hannah, username: penny.username)
Message.create(text: "I just saw your name on the user board! It's nice to meet you!", user: hannah, username: peter.username)