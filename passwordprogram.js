```python
# ---------------------------------------
# SIMPLE PASSWORD CHANGE SYSTEM
# Pure Python logic
# No imports
# No database
# No password hashing
# ---------------------------------------


# ---------------------------------------
# FAKE DATABASE
# ---------------------------------------

users = {
    "gerald@gmail.com": {
        "password": "12345",
        "two_fa": "2468"
    },

    "john@gmail.com": {
        "password": "hello123",
        "two_fa": "1357"
    }
}


# ---------------------------------------
# PASSWORD CHANGE FUNCTION
# ---------------------------------------

def change_password():

    print("\n========== CHANGE PASSWORD ==========")

    # STEP 1: Ask for email
    email = input("Enter your email: ")

    # Check whether the email exists
    if email not in users:
        print("❌ Email not found.")
        return

    print("✅ Email found.")

    # STEP 2: Ask for current password
    current_password = input("Enter your current password: ")

    # Get the user's stored password
    stored_password = users[email]["password"]

    # Compare passwords
    if current_password != stored_password:
        print("❌ Incorrect password.")
        return

    print("✅ Password is correct.")

    # STEP 3: Ask for 2FA code
    two_fa = input("Enter your 2FA code: ")

    stored_two_fa = users[email]["two_fa"]

    if two_fa != stored_two_fa:
        print("❌ Incorrect 2FA code.")
        return

    print("✅ 2FA verified.")

    # ---------------------------------------
    # STEP 4: GENERATE VERIFICATION CODE
    # ---------------------------------------

    # Simple demonstration code generator.
    # NOT secure. This is only for learning.

    verification_code = (
        len(email) * 37
        + len(current_password) * 13
        + len(two_fa) * 19
    )

    # Keep it within six digits
    verification_code = verification_code % 1000000

    # Convert to text
    verification_code = str(verification_code)

    # Make sure it has six digits
    verification_code = verification_code.zfill(6)

    print("\nA verification code has been sent to you.")

    # For demonstration purposes only:
    print("(Demo) Verification code:", verification_code)

    # STEP 5: User enters verification code
    entered_code = input("Enter verification code: ")

    if entered_code != verification_code:
        print("❌ Incorrect verification code.")
        return

    print("✅ Verification successful.")

    # ---------------------------------------
    # STEP 6: NEW PASSWORD
    # ---------------------------------------

    new_password = input("Enter your new password: ")
    confirm_password = input("Confirm your new password: ")

    # Make sure both passwords match
    if new_password != confirm_password:
        print("❌ Passwords do not match.")
        return

    # Basic password requirement
    if len(new_password) < 8:
        print("❌ Password must be at least 8 characters.")
        return

    # ---------------------------------------
    # STEP 7: CHANGE PASSWORD
    # ---------------------------------------

    users[email]["password"] = new_password

    print("\n🎉 Password changed successfully!")


# ---------------------------------------
# RUN PROGRAM
# ---------------------------------------

change_password()
```
