# Functional requirements
### Description of the application

# Login Page
Everyone will enter her/his email and password and depending on her/his type/role, will
be redirected to one of the following 2 pages
* Property Owner (User) Home Page
* Administrator Home Page
On this page a self-registration page for the user will be linked.
The self-registration page for Property-Owner
This page requires the following fields:
* VAT number (ΑΦΜ), which is a unique identifier that characterizes users)
* Name
* Surname
* Address
* Phone number
* E-mail (used as Username )
* password
* type of user
# The user Homepage
This page shows only the repairs that concern the current user. This page is expected to align
with the GDPR requirements.
Also, it will allow her/him to navigate to the following pages:
* Property Owner details page
* Property details page
* Repairs page
# Property Owner details page (user view)
The pages for property owners include the following options: Update, Delete.
Update (nice to have): On this page, the complete details of a user will be displayed, and the
administrator will be able to modify them. The navigation on the page can be done with a
corresponding link on the search page.
Delete (self-deactivation): Through the update page, a special button will be provided that
will allow this function. It is recommended to press the JavaScript window to confirm the
action at the touch of a button. Consider the soft delete option.
# Property Page (user view)
It will contain the following functions: View, Create, Delete, and Update.
View: Displays all the details of the property.
Create: Form with the following fields:
* Α Property Identification Number, which coincides with the corresponding number of
E9 and will uniquely characterize the property,
* Property address,
* Year of construction,
* Type of property (Detached house, Maisonet, Apartment building), (Note: this field is
now removed by the owner
* VAT number of its owner.
Update (nice to have): All the details of the property can be edited.
Delete: The property can be permanently deleted or deactivated.
# Property Repair Page (user view)
It will contain the following functions: Search, Create, Delete, and Update.
Create:
* Date (datetime) of the scheduled repair
* Type of repair (Painting, Insulation, Frames, plumbing, electrical work)
* Repair description as a free-text field for the work to be done (e.g., installation of a
solar water heater)
* Repair address
* Status of the repair (Pending, In progress, Complete - default is the pending status)
* Cost of repair
* Owner for whom the repair is made
Update: As in the Owner page, where it will be possible to update the repair details (e.g.,
status)
Delete: Through the update page, a special button will be provided that will allow this
function. It is recommended to press the JavaScript window to confirm the action at the
touch of a button.
Nice to have
* Validations via JavaScript for data entry forms. For example, a user with a blank VAT
number cannot be entered.
* Validations in the Backend when entering data: For example, you cannot enter a user
with an existing email or VAT number
* Owner has more than one property.
* Authentication & Authorization: After their identification, depending on their type,
ordinary users should not have access to the administrators' pages (i.e., changing the
URL).
# The administrator Homepage
The page will present the active repairs of the day (ongoing repairs). Also, it will allow
administrators to navigate to the following pages:
* Property Owners and Properties page
* Repairs page
# Property Owners and properties page (admin view)
The page will display a list of the properties using a paging view. Also, it will contain links for
the users and property management to the following pages:
* Create a property owner with the corresponding form (create-owner-page)
* Owner data processing page. Stylistically it will look like creating an owner just the
fields will be pre-filled. In addition, there will be a button that when pressed will
delete the corresponding Owner. (edit-owner- page)
* User search page: A form with the search criteria (VAT number, e-mail) and below a
table with the results (initially empty on the 1st visit to the page). (search-ownerpage)
* Create-property- page (nice to have)
* Edit-property- page (nice to have)
* Search-property- page (nice to have). The administrator will be able to search for
properties based on various criteria, but mainly
* Property ID Number
* VAT number
Note: Update and Delete options can be found next to the search results for each owner/
user.
# Repairs page (admin view)
The page will display a list of the pending repairs. Also, it will contain links to the pages for the
repair management as follows
* Create-repair- page
* Edit-repair- page (nice to have)
* Search repair page: Based on
* Date or Range of dates
* User ID in case we want to display all the repairs made for a property owner.
