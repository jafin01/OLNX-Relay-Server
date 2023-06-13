# OLNX Relay Server

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- PORT = Specify the port Number

- ELEVENLABS_API_KEY = ElevenLabs Api key

- ELEVENLABS_VOICE_ID = Specify the voice for the assistant (Id)

After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using  `yarn` command.

Now you can run `yarn start` and the application should work.
