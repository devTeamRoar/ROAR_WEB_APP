# Azure Web App Deployment Configuration

## Build Configuration
- **Node Version**: 18.x or 20.x
- **Build Command**: `npm run build:azure`
- **Start Command**: `npm start`
- **Output Directory**: `.next`

## Environment Variables
Set these in Azure Web App Configuration:

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

## Deployment Steps

### Option 1: Azure DevOps Pipeline
1. Create `azure-pipelines.yml` in your repository root
2. Connect Azure DevOps to your repository
3. Run the pipeline

### Option 2: GitHub Actions
1. Create `.github/workflows/azure-webapp.yml`
2. Connect GitHub to Azure
3. Push to trigger deployment

### Option 3: Direct Deployment
1. Build locally: `npm run build:azure`
2. Deploy the `.next` folder to Azure Web App
3. Ensure `web.config` is in the root directory

## Important Notes

### Video File Optimization
Your video files are large (3-14MB). Consider:
1. **Compress videos** using tools like FFmpeg
2. **Use Azure Blob Storage** for video hosting
3. **Implement lazy loading** for videos
4. **Use CDN** for better performance

### Recommended Video Compression
```bash
# Compress videos to reduce size
ffmpeg -i input.mp4 -vcodec h264 -acodec mp2 -crf 28 -preset fast output.mp4
```

### Azure Blob Storage Integration
For better performance, move videos to Azure Blob Storage:
1. Create Azure Storage Account
2. Upload videos to blob storage
3. Update video URLs in your components
4. Use Azure CDN for global distribution

## Troubleshooting

### Common Issues:
1. **Build Failures**: Check Node.js version compatibility
2. **Large Files**: Optimize video files or use external storage
3. **Routing Issues**: Ensure `web.config` is properly configured
4. **Performance**: Enable compression and caching

### Build Logs to Check:
- Node.js version
- Build output size
- Static file generation
- Error messages during deployment
