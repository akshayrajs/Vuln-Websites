#!/bin/bash

# Directories for Compose stacks
COMPOSE_DIRS=(
    "/var/www/dev"
    "/var/www/dash"
    "/var/www/dvwp"
    "/var/www/home"
)

# Systemd service naming helper
service_name() {
    # Get basename and sanitize (replace / with -)
    echo "docker-compose-$(basename "$1").service"
}

# Main loop
for dir in "${COMPOSE_DIRS[@]}"; do
    SERVICE_FILE="/etc/systemd/system/$(service_name "$dir")"
    echo "Creating $SERVICE_FILE ..."

    cat <<EOF | sudo tee "$SERVICE_FILE"
[Unit]
Description=Docker Compose Stack for $dir
Requires=docker.service
After=docker.service

[Service]
WorkingDirectory=$dir
ExecStart=/usr/bin/docker compose up
ExecStop=/usr/bin/docker compose down
Restart=always
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
EOF

    # Reload systemd, enable and start the service
    sudo systemctl daemon-reload
    sudo systemctl enable $(service_name "$dir")
    sudo systemctl start $(service_name "$dir")
    echo "Enabled and started $(service_name "$dir")"
done

echo "All Compose systemd services created and started."
