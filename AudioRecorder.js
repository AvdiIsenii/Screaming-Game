window.VolumeAnalyzer = {
    StartVolumeAnalysis: async function (dotnetObjRef) {
        try {
            const AudioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const audioContext = new AudioContext();

            const AudioSource = audioContext.createMediaStreamSource(AudioStream);

            const ScriptNode = audioContext.createScriptProcessor(2048, 1, 1);

            ScriptNode.onaudioprocess = function (audioProcessingEvent) {
                const InputBuffer = audioProcessingEvent.inputBuffer;
                const inputData = InputBuffer.getChannelData(0);

                let sum = 0;
                for (let i = 0; i < inputData.length; i++)
                {
                    sum += Math.pow(inputData[i], 2);

                }

                const rms = Math.sqrt(sum / inputData.length);

                dotnetObjRef.invokeMethodAsync("RecieveLoudness", rms);
            };

            AudioSource.connect(ScriptNode);
            ScriptNode.connect(audioContext.destination);
        }
        catch (error) {
            
        }
    }
}