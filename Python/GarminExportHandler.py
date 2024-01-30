import os

# Directory to search
directory = "/Users/bramschork/Library/CloudStorage/OneDrive-CaliforniaInstituteofTechnology"

# List to store filenames
driving_range_files = []

# Check if the directory exists
if os.path.exists(directory):
    # Iterate through files in the directory
    for filename in os.listdir(directory):
        # Check if the filename contains "DrivingRange"
        if "DrivingRange" in filename:
            driving_range_files.append(filename)

    # Print the list of filenames
    print("Files with 'DrivingRange' in the filename:")
    for filename in driving_range_files:
        print(filename)
else:
    print(f"The directory '{directory}' does not exist.")
