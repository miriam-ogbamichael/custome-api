#!/bin/sh

#!/ GET request
#!/ SHOW: sohws a specific 'id''s reminders
API="http://localhost:4741"
URL_PATH="/reminders"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
