initSidebarItems({"enum":[["ChannelCategoryParseError","Error that can be returned from [`ChannelCategory::convert`]."],["ContentModifier","Formatting modifiers for MessageBuilder content pushes"],["EmojiParseError","Error that can be returned from [`Emoji::convert`]."],["GuildChannelParseError","Error that can be returned from [`GuildChannel::convert`]."],["GuildParseError","Error that can be returned from [`Guild::convert`]."],["MemberParseError","Error that can be returned from [`Member::convert`]."],["MessageParseError","Error that can be returned from [`Message::convert`]."]],"fn":[["content_safe","Transforms role, channel, user, `@everyone` and `@here` mentions into raw text by using the [`Cache`] only."],["parse_channel","Retrieves an Id from a channel mention."],["parse_emoji","Retrieves the animated state, name and Id from an emoji mention, in the form of an [`EmojiIdentifier`]."],["parse_invite","Retrieves the “code” part of an invite out of a URL."],["parse_mention","Retrieve the ID number out of a channel, role, or user mention."],["parse_message_id_pair","Retrieves IDs from “{channel ID}-{message ID}” (retrieved by shift-clicking on “Copy ID”)."],["parse_message_url","Retrieves guild, channel, and message ID from a message URL."],["parse_quotes","Turns a string into a vector of string arguments, splitting by spaces, but parsing content within quotes as one individual argument."],["parse_role","Retrieves an Id from a role mention."],["parse_token","Verifies that the token adheres to the Discord token format and extracts the bot user ID and the token generation unix timestamp."],["parse_user_tag","Retrieves the username and discriminator out of a user tag (`name#discrim`)."],["parse_username","Retrieves an Id from a user mention."],["read_image","Reads an image from a path and encodes it into base64."],["shard_id","Calculates the Id of the shard responsible for a guild, given its Id and total number of shards used."],["validate_token","Validates that a token is likely in a valid format."]],"mod":[["colours","Colour constants used by Discord for their branding, role colour palette, etc."],["token","Utilities to parse and validate Discord tokens."]],"struct":[["Colour","A utility struct to help with working with the basic representation of a colour. This is particularly useful when working with a `Role`’s colour, as the API works with an integer value instead of an RGB value."],["Content","Describes formatting on string content"],["ContentSafeOptions","Struct that allows to alter [`content_safe`]’s behaviour."],["CustomMessage","A builder for constructing a personal [`Message`] instance. This can be useful for emitting a manual `dispatch` to the framework, but you don’t have a message in hand, or just have a fragment of its data."],["MessageBuilder","The Message Builder is an ergonomic utility to easily build a message, by adding text and mentioning mentionable structs."]],"trait":[["ArgumentConvert","Parse a value from a string in context of a received message."],["EmbedMessageBuilding","A trait with additional functionality over the [`MessageBuilder`] for creating content with additional functionality available only in embeds."]],"type":[["Color",""]]});