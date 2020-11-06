#!/bin/bash

#!/ DESTROY request
#!/ DELETE: deletes a specific 'id''s reminders
API="http://localhost:4741"
URL_PATH="/reminders"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
