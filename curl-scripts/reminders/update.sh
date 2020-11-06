#!/bin/bash

#!/ PATCH request
#!/ UPDATE: updates a specific 'id''s reminders
API="http://localhost:4741"
URL_PATH="/reminders"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "reminder": {
    "title": "'"${TITLE}"'",
    "reminder": "'"${REMINDER}"'"
    }
  }'

echo
