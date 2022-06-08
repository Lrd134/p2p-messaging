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
peter_penny = Conversation.create(name: "Peter Penny", description: "None Yet.", creator: peter, target: penny)
hannah_penny = Conversation.create(name: "Hannah Penny", creator: hannah, target: penny)
hannah_peter = Conversation.create(name:"Hannah Peter", creator: hannah, target: peter)

Message.create(text: "Hello! How are you today?", creator: hannah, target: penny, conversation: hannah_penny)
Message.create(text: "I'm well, and you?", creator: penny, target: hannah, conversation: hannah_penny)
Message.create(text: "What's happs", target: penny, creator: peter, conversation: peter_penny)
Message.create(text: "Nothing much, what's up with you?", creator: penny, target: peter, conversation: peter_penny)
Message.create(text: "I just saw a paper on Science Fiction!", creator: penny, target: hannah, conversation: hannah_penny)
Message.create(text: "What's happs", target: penny, creator: peter, conversation: peter_penny)
Message.create(text: "That's so cool! I love Sci-Fi!", creator: hannah, target: penny, conversation: hannah_penny)
Message.create(text: "I'm doing great! I just finished my essay on Floral Ambiguities", creator: hannah, target: penny, conversation: hannah_penny)
Message.create(text: "I just saw your name on the board! It's nice to meet you!", target: peter, creator: hannah, conversation: hannah_peter)