# Portfolio Web Server

Production web server setup for serving the Cognitive Architecture portfolio via Tailscale.

## Quick Start

### Windows (Batch)
```batch
start_server.bat
```

### Windows (PowerShell)
```powershell
.\start_server.ps1
```

### Direct Python
```bash
python server.py
```

## Access URLs

Once the server is running, access the portfolio at:

- **Local**: http://localhost:8080
- **Network**: http://YOUR_IP:8080
- **Tailscale**: http://YOUR_TAILSCALE_HOSTNAME:8080

## Features

- Serves on port 8080
- Auto-detects server directory
- Clean logging with timestamps
- CORS headers for development
- Graceful shutdown (Ctrl+C)
- Error handling for port conflicts

## Portfolio Structure

The server serves all 15 portfolio pages:

1. **Title** - Introduction and system overview
2. **Philosophy** - Core principles and design philosophy
3. **Topology** - System architecture mapping
4. **Models** - AI models and inference systems
5. **Memory** - Persistent memory and learning loops
6. **Obsidian** - Knowledge management integration
7. **Projects** - Key implementations
8. **AgentHub** - Multi-agent orchestration
9. **Browser** - Browser automation systems
10. **Mind** - Cognitive frameworks
11. **Genesis** - Development journey
12. **Bernard** - Advanced agent capabilities
13. **Suggestions** - System recommendations
14. **Voice** - Voice interface systems
15. **Closing** - Conclusions and future directions

## Tailscale Setup

To access via Tailscale:

1. Ensure Tailscale is running on this machine
2. Note your Tailscale hostname (check `tailscale status`)
3. Start the server with `start_server.bat`
4. Access from any Tailscale device at: `http://YOUR_HOSTNAME:8080`

## Firewall Configuration

If accessing from other devices on your network, you may need to allow port 8080:

```powershell
New-NetFirewallRule -DisplayName "Portfolio Server" -Direction Inbound -LocalPort 8080 -Protocol TCP -Action Allow
```

## Troubleshooting

### Port Already in Use
If you see "Port 8080 is already in use", either:
- Stop the other process using port 8080
- Edit `server.py` and change `PORT = 8080` to another port

### Python Not Found
- Install Python 3.x from python.org
- Ensure Python is added to PATH during installation

### Cannot Connect from Other Devices
- Check Windows Firewall settings
- Verify Tailscale is connected (`tailscale status`)
- Confirm server is running and shows "Waiting for connections..."

## Server Logs

The server logs all requests with timestamps:
```
[2026/02/04 12:34:56] "GET /index.html HTTP/1.1" 200 -
[2026/02/04 12:34:57] "GET /page_01_title.html HTTP/1.1" 200 -
```

## Stopping the Server

Press `Ctrl+C` in the terminal window to gracefully stop the server.
