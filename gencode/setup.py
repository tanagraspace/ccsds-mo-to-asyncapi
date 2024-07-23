from setuptools import setup, find_packages

setup(
    name='codegen',
    version='0.1',
    packages=find_packages(where='src'),
    package_dir={'': 'src'},
    install_requires=[
        # List project dependencies here
    ],
)