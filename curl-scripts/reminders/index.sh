#!/bin/sh

#!/ GET request
#!/ INDEX: sohws all reminders
API="http://localhost:4741"
URL_PATH="/reminders"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
