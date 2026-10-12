# Transcription Instructions

## Overview
This document outlines the process used to convert audio recordings (`.m4a`) into text transcripts for the Black Bitcoiners project.

## Prerequisites
- **Python 3**: The system must have Python 3 installed.
- **ffmpeg**: Required for audio decoding. Verify installation with `which ffmpeg`.
- **pip3**: Python package installer.

## Step-by-Step Process

### 1. Install OpenAI Whisper
Whisper is an open-source speech-to-text model that runs locally.
```bash
pip3 install --break-system-packages openai-whisper
```
*Note: The `--break-system-packages` flag is necessary on macOS to bypass PEP 668 restrictions that block global package installations.*

### 2. Prepare Output Directory
Create a folder to store the resulting text files.
```bash
mkdir -p transcripts
```

### 3. Run Transcription
Execute the Whisper command on the audio files. The `base` model is recommended for speed and efficiency on CPU.
```bash
whisper recordings/*.m4a --output_dir transcripts --output_format txt --language en --model base
```

### Parameters Explained
- `recordings/*.m4a`: Input audio files.
- `--output_dir transcripts`: Destination for output files.
- `--output_format txt`: Generates plain text files.
- `--language en`: Forces English transcription for better accuracy.
- `--model base`: Uses the lightweight base model (~139MB) for faster processing.

## Troubleshooting
- **Model Download Timeout**: If the default large model times out, explicitly specify `--model base` or `--model small`.
- **Permission Errors**: Use `sudo` or `--break-system-packages` if pip installation fails due to system restrictions.
- **Audio Format Issues**: Ensure `ffmpeg` is installed to handle `.m4a` conversion.
