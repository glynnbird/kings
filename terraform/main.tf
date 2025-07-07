terraform {
  backend "s3" {
    bucket = "grb-terraform-state"
    key    = "kings/terraform.tfstate"
    region = "eu-west-1"
  }
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.5.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}
