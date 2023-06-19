import axios from "axios";

export async function textToSpeech (req, res) {
  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    const voiceId = req.body.voice_id;
    const text = req.body.text;
    const model_id = req.body.model_id;
    const voice_settings = req.body.voice_settings;
    // const fineTuning = req.body.fineTuning;

    const {data} = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        text: text,
        model_id,
        voice_settings,
        // fineTuning,
      },
      {
        headers: {
          "xi-api-key": `${apiKey}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );

    res.send({
      success: true,
      message: "Text to speech success",
      data,
    })

    // res.send({
    //   success: true,
    //   message: "Text to speech success",
    //   data: response.data,
    // })
  } catch (error) {
    res.json({
      success: false,
      message: error.message
    })
  }
}